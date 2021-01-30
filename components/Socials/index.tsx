const socials = [
    {
      src: "/git.png",
      link: "https://github.com",
    },
    {
      src: "/tg.png",
      link: "https://t.me/fraxfinance",
    },
    {
      src: "/tw.png",
      link: "https://twitter.com/fraxfinance",
    },
  ]
function SocialItem({src, link}){
    return (
      <a href={link} target="_blank" >
        <img className="h-6 md:h-7 mx-3 rounded-full object-cover hover:opacity-75" src={src} />
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
