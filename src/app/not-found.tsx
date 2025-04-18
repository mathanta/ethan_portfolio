// app/not-found.tsx
export default function NotFound() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',  // leaves room for nav and footer
        gap: '1rem'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold'
        }}>404</h1>
        <p>Page not found</p>
      </div>
    );
  }  