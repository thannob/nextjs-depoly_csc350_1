import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

const db = mysqlPool.promise()

export async function GET(request){
    try {
        const [rows, fields] = await db.query(
            'SELECT * FROM attractions'
        )
        return NextResponse.json(rows, {status: 200})
    } catch (error){
        return NextResponse.json({error:"Failed to fetch"}, {status: 500})
    }
}

export async function POST(request){
    try {
        const {name, detail, coverimage, latitude, longitude} = await request.json();
        const [result] = await db.query(
            'INSERT INTO attractions (name, detail, coverimage, latitude, longitude) VALUES (?,?,?,?,?)',[name, detail,coverimage, latitude, longitude]
        );
        return NextResponse.json({id:result.insertId,name, detail,coverimage, latitude, longitude}, {status: 200});
    } catch (error){
        return NextResponse.json({error: error}, {status: 500})
    }
}