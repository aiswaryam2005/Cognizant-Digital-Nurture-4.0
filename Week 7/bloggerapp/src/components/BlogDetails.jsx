// src/components/BlogDetails.jsx
const blogs = [
  { id: 1, title: 'React Lifecycle', summary: 'Understanding hooks' },
  { id: 2, title: 'JSX in Depth', summary: 'Everything about JSX' },
];

function BlogDetails() {
  const show = true;

  // Conditional Rendering via variable
  let blogList = show ? (
    blogs.map((blog) => (
      <div key={blog.id}>
        <h4>{blog.title}</h4>
        <p>{blog.summary}</p>
      </div>
    ))
  ) : (
    <p>No blogs to show</p>
  );

  return (
    <div>
      <h2>Blog Details</h2>
      {blogList}
    </div>
  );
}

export default BlogDetails;
