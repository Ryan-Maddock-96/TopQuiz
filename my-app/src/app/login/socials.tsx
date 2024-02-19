import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoTiktok, BiLogoTwitter } from "react-icons/bi"

export const Socials = () => {
    return (
        <div className='flex flex-col gap-y-2 items-center'>
            <div>Follow us on socials:</div>
            <div className='flex gap-x-2 text-4xl'>
                <BiLogoTwitter />
                <BiLogoFacebookSquare />
                <BiLogoInstagramAlt />
                <BiLogoTiktok />
            </div>
      </div>
    )
}