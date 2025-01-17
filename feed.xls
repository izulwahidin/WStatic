<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <xsl:output method="html" />
  <xsl:variable name="title" select="/rss/channel/title"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>
          <xsl:value-of select="$title"/> - by po.fyi
        </title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-[#3498DB] p-4 flex flex-col gap-4">
        <section id="header" class="bg-[#f4f4f4] p-2 rounded-lg">
          <h1 class="text-3xl font-bold">
            <xsl:value-of select="$title"/>
            <span class="text-xs"> - by po.fyi</span>
          </h1>
          <p class="text-lg">You are viewing an auto-generated
            <acronym title="Really Simple Syndication">RSS</acronym> feed. RSS feeds allow you to stay up to date with the latest content and features you want from websites. To subscribe to it, you will need a News Reader or other similar device.
          </p>
          <p class="text-lg">Below is the latest content available from this feed.</p>
        </section>
        <section id="content" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <xsl:for-each select="rss/channel/item">
              <article class="p-2 rounded-lg bg-[#f4f4f4] flex flex-col gap-2 text-pretty">
                  <a href="{link}" rel="bookmark">
                    <h2 class="text-xl font-bold line-clamp-2 hover:text-[#3498DB]"><xsl:value-of disable-output-escaping="yes" select="title"/> </h2>
                  </a>
                  <div class="line-clamp-4">
                    <xsl:choose>
                      <xsl:when test="content:encoded">
                        <xsl:value-of disable-output-escaping="yes" select="content:encoded" />
                      </xsl:when>
                      <xsl:when test="description">
                        <xsl:value-of disable-output-escaping="yes" select="description" />
                      </xsl:when>
                    </xsl:choose>
                  </div>
              </article>
            </xsl:for-each>
        </section>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
