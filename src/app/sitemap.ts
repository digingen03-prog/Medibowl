import { MetadataRoute } from "next";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.canonicalUrl;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about-us",
    "/products",
    "/business-solutions/b2b",
    "/business-solutions/b2c",
    "/international-exports",
    "/procurement-process",
    "/become-a-partner",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-conditions",
    "/shipping-policy",
    "/returns-and-refunds",
    "/regulatory-disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1.0 : route.startsWith("/products") || route.startsWith("/business") ? 0.8 : 0.6,
  }));

  const productRoutes = PRODUCT_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}

