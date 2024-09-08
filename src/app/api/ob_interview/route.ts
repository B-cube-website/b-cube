import { NextResponse } from 'next/server';
import { uploadImage } from '../upload/uploadService'; // 이미지 업로드 서비스
import pool from '../../_libs/mysql'; // MySQL 커넥션
import { getObjectStorageClient } from '../../os/objectStorageClient'; // 객체 스토리지 클라이언트

import '../../../server/init'; // 초기화 파일 경로 수정

export async function POST(req: Request) {
  try {
      console.log('Request received');

      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      const name = formData.get('name') as string || '';
      const studentId = formData.get('student_id') as string || '';
      const message = formData.get('message') as string || '';
      const email = formData.get('email') as string || ''; // 이메일 필드 추가

      let imageUrl = '';

      if (file) {
          // 파일이 있는 경우 처리
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          const objectStorageClient = getObjectStorageClient();
          console.log('ObjectStorageClient created');

          const { uniqueId, imageUrl: uploadedImageUrl } = await uploadImage(buffer, file.name, objectStorageClient);
          imageUrl = uploadedImageUrl;
          console.log('Image uploaded successfully');
      }

      // 데이터베이스에 데이터 삽입
      const [result] = await pool.query(
          'INSERT INTO ob_interview (name, student_id, message, image_path, email) VALUES (?, ?, ?, ?, ?)',
          [name, studentId, message, imageUrl, email] // 쿼리에 이메일 추가
      );
      console.log('Database query executed');

      const insertId = (result as any).insertId;
      console.log('Record inserted with ID:', insertId);

      // 성공적인 응답 반환
      return NextResponse.json({ id: insertId, imageUrl });
  } catch (error) {
      console.error('Error:', error);
      // 에러 응답 반환
      return NextResponse.json({ error: '이미지 업로드 및 데이터베이스 저장 실패' }, { status: 500 });
  }
}