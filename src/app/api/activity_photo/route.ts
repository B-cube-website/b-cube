import { NextResponse } from 'next/server';
import { uploadImage } from '../upload/uploadService';
import pool from '../../_libs/mysql';
import { getObjectStorageClient } from '../../os/objectStorageClient';

import '../../../server/init'; // 경로 수정

export async function POST(req: Request) {
    try {
      console.log('Request received');
  
      const formData = await req.formData();
      const file = formData.get('file') as File;
      const description = formData.get('description') as string || '';
  
      if (!file) {
        console.error('File missing');
        return NextResponse.json({ error: '파일이 필요합니다.' }, { status: 400 });
      }
  
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
  
      const objectStorageClient = getObjectStorageClient();
      console.log('ObjectStorageClient created');
  
      const { uniqueId, imageUrl } = await uploadImage(buffer, file.name, objectStorageClient);
      console.log('Image uploaded successfully');
  
      const [result] = await pool.query('INSERT INTO activity_photo (image_path, description) VALUES (?, ?)', [imageUrl, description]);
      console.log('Database query executed');
  
      const insertId = (result as any).insertId;
      console.log('Record inserted with ID:', insertId);
  
      return NextResponse.json({ id: insertId, imageUrl });
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ error: '이미지 업로드 및 데이터베이스 저장 실패' }, { status: 500 });
    }
  }