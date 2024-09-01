import { NextResponse } from 'next/server';
import { getObjectStorageClient } from '../../../os/objectStorageClient';
import { uploadImage } from '../../upload/uploadService';
import pool from '../../../_libs/mysql';
import { uploadPdf } from '../../upload/pdfUploadService';

import '../../../../server/init';

export async function POST(req: Request) {
    try {
        if (!req.body) {
            return NextResponse.json({ error: 'Request body is null' }, { status: 400 });
        }

        // ReadableStream을 Buffer로 변환
        const stream = req.body as ReadableStream<Uint8Array>;
        const buffer = Buffer.from(await streamToBuffer(stream));

        // FormData 생성
        const formData = new FormData();
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        formData.append('file', blob, 'file');

        // FormData에서 값 추출
        const file = formData.get('file') as File;
        const year = (formData.get('year') as string) || '1970'; // 기본값 설정
        const title = (formData.get('title') as string) || '';
        const participants = (formData.get('participants') as string) || '';
        const url = (formData.get('url') as string) || '';

        // 파일이 없는 경우 오류 처리
        if (!file) {
            console.error('File missing');
            return NextResponse.json({ error: '파일이 필요합니다.' }, { status: 400 });
        }

        // 파일을 Buffer로 변환
        const arrayBuffer = await file.arrayBuffer();
        const fileBuffer = Buffer.from(arrayBuffer);

        // Object Storage 클라이언트 생성
        const objectStorageClient = getObjectStorageClient();

        // 이미지 업로드
        const { uniqueId: imageId, imageUrl } = await uploadImage(fileBuffer, file.name, objectStorageClient);

        // PDF 업로드 (파일이 PDF일 경우 PDF 업로드 로직 추가)
        const { uniqueId: pdfId, pdfUrl } = await uploadPdf(fileBuffer, file.name, objectStorageClient);

        // 데이터베이스에 이미지 URL 및 기타 정보 저장
        const [result] = await pool.query(
            'INSERT INTO designton (year, title, participants, image_path, pdf_file) VALUES (?, ?, ?, ?, ?)',
            [year, title, participants, imageUrl, pdfUrl]
        );

        // 삽입된 레코드의 ID 반환
        const insertId = (result as any).insertId;

        // 성공 응답 반환
        return NextResponse.json({ id: insertId, imageUrl, pdfUrl });
    } catch (error) {
        // 에러 처리 및 로그 출력
        console.error('Error:', error);
        return NextResponse.json({ error: '업로드 및 데이터베이스 저장 실패' }, { status: 500 });
    }
}

// ReadableStream을 Buffer로 변환하는 함수
async function streamToBuffer(stream: ReadableStream<Uint8Array>): Promise<Uint8Array> {
    const reader = stream.getReader();
    const chunks: Uint8Array[] = [];
    let result = await reader.read();
    while (!result.done) {
        chunks.push(result.value);
        result = await reader.read();
    }
    return Buffer.concat(chunks);
}