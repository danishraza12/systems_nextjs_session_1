const UserProfilePage = (props) => {
  return <h2>{props.username}</h2>  
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  return {
    props: {
      username: 'Max'
    }
  }
}