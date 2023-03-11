import { parse } from 'path';

type GlobEntry = {
    metadata: Post;
    default: unknown;
};

export interface Post {
    title: string;
    description: string;
    date: string;
}

// Get all posts and add metadata
export const posts = Object.entries(
    import.meta.glob<GlobEntry>('/src/lib/posts/**/*.md', { eager: true })
)
.map(([filePath, globEntry]) => {
    return {
        ...globEntry.metadata,
        // Generate slug from file path
        slug: parse(filePath).name,
    };
})
// Sort by date
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
// Add references to next and previous posts
.map((post, index, allPosts) => ({
    ...post,
    next: allPosts[index - 1] || 0,
    previous: allPosts[index + 1] || 0,
}));