export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-bg-primary">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        <p className="text-sm text-text-muted">Loading workspace...</p>
      </div>
    </div>
  );
}
