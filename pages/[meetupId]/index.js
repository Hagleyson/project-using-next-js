import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetais() {
  return (
    <MeetupDetail
      image="https://www.viajali.com.br/wp-content/uploads/2016/09/brasil-1.jpg"
      title="First Meetup"
      address="Some Street 5"
      description="This is a first meetup"
      id="m1"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://www.viajali.com.br/wp-content/uploads/2016/09/brasil-1.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5",
        description: "This is a first meetup",
      },
    },
  };
}
export default MeetupDetais;
