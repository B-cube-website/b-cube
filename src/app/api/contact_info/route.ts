import { NextResponse } from 'next/server';
import pool from '../../_libs/mysql';
import '../../../server/init'; // 경로 수정


export async function POST(req: Request) {
    try {
        console.log('Request received');

        // 폼 데이터 파싱
        const formData = await req.formData();

        // 폼 데이터에서 필드 추출
        const email = formData.get('email') as string || '';
        const kakaoInfo = formData.get('kakao_info') as string || '';
        const instagramInfo = formData.get('instagram_info') as string || '';

        // 필수 필드 체크
        if (!email) {
            console.error('Email missing');
            return NextResponse.json({ error: '이메일이 필요합니다.' }, { status: 400 });
        }

        // 데이터베이스에 데이터 삽입
        const [result] = await pool.query(
            'INSERT INTO contact_info (email, kakao_info, instagram_info) VALUES (?, ?, ?)',
            [email, kakaoInfo, instagramInfo]
        );
        console.log('Database query executed');

        // 삽입된 레코드 ID 반환
        const insertId = (result as any).insertId;
        console.log('Record inserted with ID:', insertId);

        return NextResponse.json({ id: insertId });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: '데이터베이스 저장 실패' }, { status: 500 });
    }
}