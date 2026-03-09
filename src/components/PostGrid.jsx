import PostCard from "./PostCard.jsx";

export default function PostGrid({ posts, onLike, onDislike }) {
  return (
    <div className="grid" id="posts">
      {posts.map((post) => (
        // TODO (PostGrid.jsx):
        // Render PostCard for each post (use key=post.id, key=post.id, post=post onLike=onLike, and onDislike=onDislike:
        <PostCard key={post.id} post={post} onLike={onLike} onDislike={onDislike} />
        
      ))}
    </div>
  );
}
