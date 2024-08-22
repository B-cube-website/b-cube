import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/_libs/mysql';

export async function GET(request: NextRequest) {
    try {
        const connection = await pool.getConnection();
        
        const [rows] = await connection.execute('SELECT * FROM executives');
        
        
        connection.release();
        
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Database connection error:', error);
        return NextResponse.json({
            error: 'Failed to fetch executives data',
        }, { status: 500 });
    }
}