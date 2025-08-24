import UserAbout from "@/components/UserPage/About/UserAbout"
import UserLayout from "@/components/UserPage/UserLayout"



const About = () => {
  return (
    <UserLayout >
      <div className="flex justify-start items-center">
        <UserAbout followers={2} />
      </div>
    </UserLayout>
  )
}

export default About