import { createRouter, defineRoute } from "type-route";
import { makeThisModuleAnExecutableRouteLister } from "github-pages-plugin-for-type-route";
import type { RouterOpts } from "type-route";

const opts: RouterOpts = {
	"scrollToTop": false
}

const publicUrl = __BASE_URL__;


export const routeDefs = {
	"home": defineRoute(publicUrl || "/"),
	"page1": defineRoute(publicUrl + "/page1")
};


makeThisModuleAnExecutableRouteLister(routeDefs);

export const { RouteProvider, routes, useRoute } = createRouter(opts,
	routeDefs
);
