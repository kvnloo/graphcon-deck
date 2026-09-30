# graphcon-deck

Original single-file GraphCon graph presentation.

## Reference-fixture check

This fork also uses the original `index.html` as an immutable visual/behavioral
reference while experimenting in successor graph tooling. Before comparing or
porting behavior, verify that the baseline has not drifted:

```bash
node scripts/verify-reference.mjs
```

The check recomputes the Git blob identity of `index.html` and fails if the
reference file changes. It adds no runtime dependency and does not modify the
presentation.
