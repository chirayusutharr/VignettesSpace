
const articles = [
  {
    day: "20",
    month: "July",
    title: "Find the Focal Point of Your Living Room",
    description:
      "Arrange furniture around your fireplace, view, or television to create a balanced and inviting space.",
    image:
      "https://st.hzcdn.com/simgs/a081ddb805371c39_14-5698/photo.jpg",
    category: "Living Room",
  },
  {
    day: "24",
    month: "July",
    title: "Create a Space That Feels Naturally Balanced",
    description:
      "Explore thoughtful layouts, natural materials, and timeless details for everyday living.",
    image:
      "https://images.pexels.com/photos/7027771/pexels-photo-7027771.jpeg",
    category: "Interior Ideas",
  },
];

export default function DesignJournal() {
  return (
    <section
      id="journal"
      className="w-full bg-[#E9ECE5] px-4 py-20 sm:px-8 sm:py-28 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#A77B51]">
              Our Journal
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#293D32] sm:text-5xl lg:text-6xl">
              Thoughts on Creating
              <br />
              <span className="italic">
                Elevated Everyday Spaces
              </span>
            </h2>
          </div>

          <a
            href="#journal"
            className="inline-flex w-fit items-center gap-4 rounded-full bg-[#293D32] px-6 py-3 text-xs text-white transition hover:bg-[#A77B51]"
          >
            View All Articles <span>↗</span>
          </a>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group border border-[#DCD4C8] p-3 transition-colors duration-300 hover:border-[#A77B51] sm:p-4"
            >
              <div className="grid grid-cols-[52px_minmax(0,1fr)] gap-3 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-4">
                {/* Date */}
                <div className="pt-1">
                  <p className="text-xl font-medium text-[#293D32]">
                    {article.day}
                  </p>
                  <p className="mt-1 text-xs text-[#77766D]">
                    {article.month}
                  </p>
                </div>

                {/* Image and article content */}
                <div className="min-w-0">
                  <div className="overflow-hidden bg-[#E8E1D5]">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-56"
                    />
                  </div>

                  <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[#A77B51]">
                    {article.category}
                  </p>

                  <h3 className="mt-2 font-serif text-xl leading-snug text-[#293D32] sm:text-2xl">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#62675E]">
                    {article.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 flex items-center justify-end gap-2 text-xs font-medium text-[#293D32] transition-colors hover:text-[#A77B51]"
                  >
                    Read More <span className="text-base">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
