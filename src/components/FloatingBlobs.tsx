const FloatingBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-blob" />
    <div className="absolute top-1/3 -right-40 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-blob-delay" />
    <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-blob-delay-2" />
  </div>
);

export default FloatingBlobs;
