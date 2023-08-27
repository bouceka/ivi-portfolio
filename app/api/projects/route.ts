import { getAllProjects } from '@/app/_actions/projectActions';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const limit = parseInt(req.nextUrl.searchParams.get('limit') || '0', 10);
  const res = await getAllProjects(limit === 0 ? null : limit);

  return NextResponse.json(res);
}
