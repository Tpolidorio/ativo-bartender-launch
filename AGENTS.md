<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep public marketing content in the single scrolling index route because this brief explicitly requests a landing page with section navigation.
- Store contact destinations in `site-config.ts` so missing business details remain editable without invented links.
- Submit public quotes through a validated server function and a private RLS-locked table; never expose quote rows in browser data access.
- Store uploaded event photos and videos as Lovable Assets pointers, not repository binaries, to keep real media lightweight and replaceable.
