import { useState } from "react";
import {
  FaUsers,
  FaComments,
  FaUserPlus,
  FaSearch,
  FaFilter,
  FaRegHeart,
  FaRegComment,
  FaRegShareSquare,
  FaRegBookmark,
  FaEllipsisH,
} from "react-icons/fa";
import "./Community.css";

const Community = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const posts = [
    {
      id: 1,
      author: "Priya Sharma",
      role: "Mental Health Advocate",
      content:
        "Just completed my morning meditation session. It's amazing how 15 minutes of mindfulness can set a positive tone for the entire day. Anyone else practicing daily meditation?",
      likes: 45,
      comments: 12,
      shares: 5,
      category: "wellness",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "Rahul Verma",
      role: "Therapist",
      content:
        "Sharing some tips for managing anxiety during stressful times: 1. Practice deep breathing 2. Stay connected with loved ones 3. Maintain a routine 4. Exercise regularly. What works best for you?",
      likes: 78,
      comments: 23,
      shares: 15,
      category: "anxiety",
      timestamp: "4 hours ago",
    },
    {
      id: 3,
      author: "Anjali Patel",
      role: "Yoga Instructor",
      content:
        "Today's yoga class focused on stress relief poses. The combination of asanas and pranayama really helps in calming the mind. Would love to hear your favorite stress-busting poses!",
      likes: 92,
      comments: 18,
      shares: 8,
      category: "wellness",
      timestamp: "6 hours ago",
    },
    {
      id: 4,
      author: "Dr. Amit Kumar",
      role: "Psychiatrist",
      content:
        "Important reminder: It's okay to seek help. Whether you're dealing with anxiety, depression, or any other mental health concern, professional support is always available. You're not alone in this journey.",
      likes: 156,
      comments: 34,
      shares: 42,
      category: "support",
      timestamp: "8 hours ago",
    },
    {
      id: 5,
      author: "Neha Singh",
      role: "Mental Health Coach",
      content:
        "Just finished reading a fascinating book about emotional intelligence. The connection between self-awareness and mental well-being is incredible. Any book recommendations for mental health?",
      likes: 67,
      comments: 15,
      shares: 6,
      category: "learning",
      timestamp: "10 hours ago",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.content
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === "all" || post.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="community-page">
      <div className="community-hero">
        <h1>Mental Health Community</h1>
        <p>
          Connect, share, and learn with others on their mental health journey
        </p>
      </div>

      <div className="community-container">
        <div className="community-sidebar">
          <div className="community-stats">
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <div className="stat-info">
                <h3>5,234</h3>
                <p>Community Members</p>
              </div>
            </div>
            <div className="stat-item">
              <FaComments className="stat-icon" />
              <div className="stat-info">
                <h3>12,567</h3>
                <p>Active Discussions</p>
              </div>
            </div>
            <div className="stat-item">
              <FaUserPlus className="stat-icon" />
              <div className="stat-info">
                <h3>234</h3>
                <p>New Members Today</p>
              </div>
            </div>
          </div>

          <div className="community-categories">
            <h2>Categories</h2>
            <ul>
              <li
                className={activeTab === "all" ? "active" : ""}
                onClick={() => setActiveTab("all")}
              >
                All Posts
              </li>
              <li
                className={activeTab === "wellness" ? "active" : ""}
                onClick={() => setActiveTab("wellness")}
              >
                Wellness
              </li>
              <li
                className={activeTab === "anxiety" ? "active" : ""}
                onClick={() => setActiveTab("anxiety")}
              >
                Anxiety
              </li>
              <li
                className={activeTab === "depression" ? "active" : ""}
                onClick={() => setActiveTab("depression")}
              >
                Depression
              </li>
              <li
                className={activeTab === "support" ? "active" : ""}
                onClick={() => setActiveTab("support")}
              >
                Support
              </li>
              <li
                className={activeTab === "learning" ? "active" : ""}
                onClick={() => setActiveTab("learning")}
              >
                Learning
              </li>
            </ul>
          </div>
        </div>

        <div className="community-main">
          <div className="community-search">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="filter-btn">
              <FaFilter /> Filter
            </button>
          </div>

          <div className="community-posts">
            {filteredPosts.map((post) => (
              <div key={post.id} className="community-post">
                <div className="post-header">
                  <div className="post-author">
                    <div className="author-info">
                      <h3>{post.author}</h3>
                      <p>{post.role}</p>
                    </div>
                  </div>
                  <div className="post-actions">
                    <span className="post-timestamp">{post.timestamp}</span>
                    <FaEllipsisH className="more-icon" />
                  </div>
                </div>
                <div className="post-content">
                  <p>{post.content}</p>
                </div>
                <div className="post-engagement">
                  <button className="engagement-btn">
                    <FaRegHeart /> {post.likes}
                  </button>
                  <button className="engagement-btn">
                    <FaRegComment /> {post.comments}
                  </button>
                  <button className="engagement-btn">
                    <FaRegShareSquare /> {post.shares}
                  </button>
                  <button className="engagement-btn">
                    <FaRegBookmark />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
