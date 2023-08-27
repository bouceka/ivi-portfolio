'use server'

import { NewProject, Project, db, projects } from "../_db/schema";
import { eq } from 'drizzle-orm'


export async function addItem(project: Project) {
    await db.insert(projects).values(project).returning();
}


export const insertProject = async (project: NewProject): Promise<Project[]> => {
    return db.insert(projects).values(project).returning();
};

export const getAllProjects = async (limit: number | null) => {

    // Build the query conditionally based on the limit
    const queryBuilder = db.select().from(projects)

    if (limit !== null) {
        queryBuilder.limit(limit);
    }
    return await queryBuilder.execute();

}


export const getProjectById = async (projectId: string) =>
    await db.select().from(projects).where(eq(projects.id, projectId)).limit(1);

export const getProjectBySlug = async (slug: string): Promise<Project> => {
    const [project] = await db.select().from(projects).where(eq(projects.slug, slug)).limit(1);
    return project
}

export const updateProject = async (projectId: string, project: Partial<Project>):Promise<Project[]> => await db.update(projects)
    .set(project)
    .where(eq(projects.id, projectId)).returning();


export const deleteProject = async (projectId: string): Promise<Project[]> => {
    return db.delete(projects).where(eq(projects.id, projectId)).returning();
};