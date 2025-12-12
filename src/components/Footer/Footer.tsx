
const Footer = () => {
  const copyright = "© 2023";
  const links = ["Twitter", "LinkedIn", "Email", "RSS feed", "Add to Feedly"];
  return (
    <footer className="py-6 px-8 lg:px-28">
      <div className="flex flex-col text-center lg:flex-row lg:text-start gap-3.5">
        <p className="hover:text-blue-900 dark:hover:text-blue-200 cursor-pointer">
          {copyright}
        </p>
        {links.map((link) => (
          <p
            key={link}
            className="hover:text-blue-900 dark:hover:text-blue-200 cursor-pointer">
            {link}
          </p>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
