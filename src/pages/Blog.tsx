import type React from "react"
import "./Blog.css"

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Property Valuation Methods",
      excerpt: "Learn about the different approaches to property valuation and when to use each method.",
      date: "2024-01-15",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "VISA Purpose Property Valuation Guide",
      excerpt: "Everything you need to know about property valuation for embassy and migration purposes.",
      date: "2024-01-10",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Market Trends in Sri Lankan Real Estate",
      excerpt: "Current market analysis and trends affecting property values in Sri Lanka.",
      date: "2024-01-05",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-header">
          <h1>Blog & Insights</h1>
          <p>Stay updated with the latest trends and insights in property valuation</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image || "/placeholder.svg"} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-date">{new Date(post.date).toLocaleDateString()}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="read-more">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
