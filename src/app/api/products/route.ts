import pool from '@/services/db';
import { NextResponse } from 'next/server';

export async function GET(){
    try{
        const products = await pool.query(`SELECT * FROM product`)

        return NextResponse.json({
            products: products.rows,
        })
    } catch(error){
        console.error(error)
        return NextResponse.json(
            { msg: "Erro ao buscar produtos" },
            {status: 500},
        )
    }
}