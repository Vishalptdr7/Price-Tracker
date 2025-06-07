export const UserInitialsBadge = ({ fullname }) => {
    
  // Split fullname by spaces to get first and last name
  const initials = fullname
    ? fullname
        .split(" ")
        .filter(Boolean)
        .map((name) => name[0].toUpperCase())
        .slice(0, 2)
        .join("")
    : "GU"; // fallback initials for Guest User
    
  return (
    
    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-lg shadow-md select-none">
      {initials}
    </div>
  );
};
