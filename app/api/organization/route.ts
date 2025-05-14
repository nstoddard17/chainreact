import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { name, website, industry } = await req.json();

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    const organization = await prisma.organization.update({
      where: {
        id: session.user.organizationId,
      },
      data: {
        name,
        website,
        industry,
      },
    });

    return NextResponse.json(organization);
  } catch (error) {
    console.error('Error updating organization:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const organization = await prisma.organization.findUnique({
      where: {
        id: session.user.organizationId,
      },
    });

    if (!organization) {
      return new NextResponse('Organization not found', { status: 404 });
    }

    return NextResponse.json(organization);
  } catch (error) {
    console.error('Error fetching organization:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 