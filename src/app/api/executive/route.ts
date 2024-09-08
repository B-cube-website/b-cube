import { NextResponse } from 'next/server';
import { uploadImage } from '../upload/uploadService';
import pool from '../../_libs/mysql';
import { getObjectStorageClient } from '../../os/objectStorageClient';

import '../../../server/init'; // 경로 수정

export async function POST(req: Request) {
    try {
        console.log('Request received');

        // 폼 데이터 파싱
        const formData = await req.formData();

        // 이미지 파일 추출
        const file = formData.get('image') as File;
        const memberName = formData.get('member_name') as string || '';
        const role = formData.get('role') as string || '';
        const studentId = formData.get('student_id') as string || '';
        const basicInfo = formData.get('basic_info') as string || '';

        // 필수 필드 체크
        if (!file) {
            console.error('File missing');
            return NextResponse.json({ error: '이미지 파일이 필요합니다.' }, { status: 400 });
        }

        // 이미지 파일을 Buffer로 변환
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Object Storage 클라이언트 생성
        const objectStorageClient = getObjectStorageClient();
        console.log('ObjectStorageClient created');

        // 이미지 업로드
        const { uniqueId, imageUrl } = await uploadImage(buffer, file.name, objectStorageClient);
        console.log('Image uploaded successfully');

        // 데이터베이스에 데이터 삽입
        const [result] = await pool.query(
            'INSERT INTO executives (member_name, role, student_id, basic_info, image_path) VALUES (?, ?, ?, ?, ?)',
            [memberName, role, studentId, basicInfo, imageUrl]
        );
        console.log('Database query executed');

        // 삽입된 레코드 ID 반환
        const insertId = (result as any).insertId;
        console.log('Record inserted with ID:', insertId);

        return NextResponse.json({ id: insertId, imageUrl });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: '이미지 업로드 및 데이터베이스 저장 실패' }, { status: 500 });
    }
}