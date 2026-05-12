export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const auth = getHeader(event, "authorization");
  const apiUrl = useRuntimeConfig().public.apiurl;

  return $fetch(`${apiUrl}/posts/create`, {
    method: "POST",
    body,
    headers: { Authorization: auth ?? "" },
  });
});
