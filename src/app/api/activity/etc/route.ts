// src/app/api/activity/your_route/route.ts
import { NextResponse } from 'next/server';
import { getObjectStorageClient } from '../../../os/objectStorageClient'; // 경로 수정
import { uploadImage } from '../../upload/uploadService'; // 이미지 업로드 서비스
import pool from '../../../_libs/mysql';


import '../../../../server/init'; // 경로 수정


export async function POST(req: Request) {
    try {
      console.log('Request received');
  
      // FormData 파싱
      const formData = await req.formData();
      const file = formData.get('file') as File;
      const title = formData.get('title') as string || '';
      const url = formData.get('url') as string || '';
      const year = formData.get('year') as string || '';
      const participants = formData.get('participants') as string || '';
  
      // 파일이 없는 경우 오류 처리
      if (!file) {
        console.error('File missing');
        return NextResponse.json({ error: '파일이 필요합니다.' }, { status: 400 });
      }
  
      // 파일을 Buffer로 변환
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
  
      // Object Storage 클라이언트 생성
      const objectStorageClient = getObjectStorageClient();
      console.log('ObjectStorageClient created');
  
      // 이미지 업로드
      const { uniqueId, imageUrl } = await uploadImage(buffer, file.name, objectStorageClient);
      console.log('Image uploaded successfully');
  
      // 데이터베이스에 이미지 URL 및 기타 정보 저장
      const [result] = await pool.query(
        'INSERT INTO etc (year, title, participants, image_path, url) VALUES (?, ?, ?, ?, ?)',
        [year, title, participants, imageUrl, url]
      );
      console.log('Database query executed');
  
      // 삽입된 레코드의 ID 반환
      const insertId = (result as any).insertId;
      console.log('Record inserted with ID:', insertId);
  
      // 성공 응답 반환
      return NextResponse.json({ id: insertId, imageUrl });
    } catch (error) {
      // 에러 처리 및 로그 출력
      console.error('Error:', error);
      return NextResponse.json({ error: '이미지 업로드 및 데이터베이스 저장 실패' }, { status: 500 });
    }
  }