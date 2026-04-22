export function PagePlaceholder({ title, subtitle }) {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">{title}</h1>
      {subtitle ? <p className="page-placeholder__subtitle">{subtitle}</p> : null}
    </div>
  )
}
