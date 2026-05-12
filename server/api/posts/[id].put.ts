export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);
  const auth = getHeader(event, "authorization");
  const apiUrl = useRuntimeConfig().public.apiurl;

  return $fetch(`${apiUrl}/posts/${id}`, {
    method: "PUT",
    body,
    headers: { Authorization: auth ?? "" },
  });
});
