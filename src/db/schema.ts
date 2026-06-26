import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  type: text('type').notNull(),
  badge: text('badge').notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  author: text('author').notNull(),
  category: text('category').notNull(),
  categoryColor: text('category_color').notNull(),
  videoUrl: text('video_url').notNull(),
  displayOrder: integer('display_order').notNull(),
});
