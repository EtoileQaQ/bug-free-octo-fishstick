interface RuleProps {
  className?: string
}

export function Rule({ className = '' }: RuleProps) {
  return <span aria-hidden="true" className={`block h-0.5 w-8 bg-ciel ${className}`} />
}
