import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import BlogPost from "../BlogPost.astro";

test("it renders a link to a blog post", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(BlogPost, {   
        props: {
            url: '/posts/hello-world',
            title: "Hello, world!",
        }
    });

    expect(result).toContain('href="/posts/hello-world"');
    expect(result).toContain("Hello, world!");
});