export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const auth = getHeader(event, "authorization");
  const apiUrl = useRuntimeConfig().public.apiurl;

  return $fetch(`${apiUrl}/posts/${id}`, {
    method: "DELETE",
    headers: { Authorization: auth ?? "" },
  });
});
