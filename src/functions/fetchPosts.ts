type SetPostsData = (data: any[]) => void;
type SetError = (error: string | null) => void;

const fetchPosts = (requestUrl: string, setPostsData: SetPostsData, setError: SetError): void => {
  fetch(`${process.env.NEXT_PUBLIC_API_HOST}${requestUrl}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
      return response.json();
    })
    .then((data: any[]) => {
      setPostsData(data);
      setError(null);
    })
    .catch((error) => {
      console.log("데이터를 불러오는데 실패했습니다:", error);
      setError("데이터를 불러오는데 실패했습니다.");
    });
};

export default fetchPosts;
