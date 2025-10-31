import * as React from "react"

export function Table({ className, ...props }) {
  return (
    <div className="w-full overflow-auto">
      <table
        className={`w-full caption-bottom text-sm ${className}`}
        {...props}
      />
    </div>
  )
}

export function TableHeader(props) {
  return <thead {...props} />
}

export function TableBody(props) {
  return <tbody className="[&_tr:last-child]:border-0" {...props} />
}

export function TableFooter(props) {
  return (
    <tfoot
      className="bg-muted/50 border-t font-medium [&>tr]:last:border-b-0"
      {...props}
    />
  )
}

export function TableRow(props) {
  return (
    <tr
      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
      {...props}
    />
  )
}

export function TableHead({ className, ...props }) {
  return (
    <th
      className={`h-10 px-2 text-left align-middle font-medium text-muted-foreground ${className}`}
      {...props}
    />
  )
}

export function TableCell({ className, ...props }) {
  return (
    <td
      className={`p-2 align-middle ${className}`}
      {...props}
    />
  )
}

export function TableCaption({ className, ...props }) {
  return (
    <caption
      className={`mt-4 text-sm text-muted-foreground ${className}`}
      {...props}
    />
  )
}