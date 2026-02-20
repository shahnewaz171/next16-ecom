const PublicLayout = ({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => (
  <>
    {children}
    {modal}
  </>
);

export default PublicLayout;
