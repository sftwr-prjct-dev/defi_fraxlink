const socials = [
    {
      src: "/git.png",
      link: "https://github.com",
    },
    {
      src: "/tg.png",
      link: "/",
    },
    {
      src: "/tw.png",
      link: "/",
    },
  ]
function SocialItem({src, link}){
    return (
      <a href={link} target="_blank" >
        <img className="h-6 md:h-8 mx-3 rounded-full object-cover" src={src} />
      </a>
    )
}

export default function Socials({className}){
    return (
        <div className={className}>
            {socials.map(({src, link}) => <SocialItem key={src} src={src} link={link} />)}
        </div>
    )
}
