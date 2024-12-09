const Projetos_url = "https://api.cosmicjs.com/v3/buckets/portfolium-clean-version-production/objects?pretty=true&query=%7B%22type%22:%22projetos%22%7D&limit=100&skip=0&read_key=6z1OfS3LervJJiuGb5O4sALllzF3gtHsrPS8lP8NH0nw3b7KIC&depth=1&props=slug,title,metadata,type,"

export async function getProjetos() {
  const response = await fetch(Projetos_url);
  const data = await response.json();
  return data.objects;
}