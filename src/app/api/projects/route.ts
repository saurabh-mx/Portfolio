import { NextResponse } from "next/server";
import { fetchGitHubProjects } from "@/lib/github";

export async function GET() {
  try {
    const projects = await fetchGitHubProjects();
    return NextResponse.json({
      success: true,
      source: "github",
      user: "saurabh-mx",
      total: projects.length,
      projects,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching GitHub projects" },
      { status: 500 }
    );
  }
}
