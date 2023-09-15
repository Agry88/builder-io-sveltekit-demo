import { getBuilderSearchParams, fetchOneEntry } from '@builder.io/sdk-svelte';
import type { PageServerLoad } from './$types';
import { BUILDER_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ url }) => {
  // fetch your Builder content
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: BUILDER_API_KEY,
    options: getBuilderSearchParams(url.searchParams),
    userAttributes: {
      urlPath: url.pathname || '/'
    }
  });

  return {
    props: {
      content,
      API_KEY: BUILDER_API_KEY,
    },
  };
}