import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://www.viajali.com.br/wp-content/uploads/2016/09/brasil-1.jpg",
    address: "some address ...",
    description: "This is a second meetup",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUP} />;
}
export default HomePage;
