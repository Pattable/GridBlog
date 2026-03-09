/*
TODO (Header.jsx):
Create the entire Header component.

Requirements:
- Show the site title and a one-sentence description.
- Show summary numbers: totalPosts, totalLikes, totalDislikes.
*/

export default function Header({ totalPosts, totalLikes, totalDislikes }) {
  // TODO: Replace return null with your JSX
  return (
    <header className="header">
      <div>
        <h1>GridBlog</h1>
        <p className="muted">A simple blog built with React and CSS Grid.</p>
      </div>
      <div className="headerStats">
        <div>
          <span className="count">{totalPosts}</span> Posts
        </div>
        <div>
          <span className="count">{totalLikes}</span> Likes
        </div>
        <div>
          <span className="count">{totalDislikes}</span> Dislikes
        </div>
      </div>
    </header>
  );
}
