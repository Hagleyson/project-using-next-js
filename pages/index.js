import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://www.viajali.com.br/wp-content/uploads/2016/09/brasil-1.jpg",
    address: "some address ...",
    description: "This is a second meetup",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image: "https://www.viajali.com.br/wp-content/uploads/2016/09/brasil-1.jpg",
    address: "some address ...",
    description: "This is a second meetup",
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
  };
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     },
//     revalidate: 10,
//   };
// }

export default HomePage;
