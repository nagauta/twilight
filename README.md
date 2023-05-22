# Twilight

## what is this
Twilight is a Apple Private Reray IP list change checker.

### Usage
Check diff: 
/api/diff

e.g.
{
  "isSameCsv": true,
  "datetimeCurrent": "2023-05-23 01:10:18", // retrieved datetime from https://mask-api.icloud.com/egress-ip-ranges.csv
  "datetimeStored": "2023-05-23 00:00:00" // stored datetime in the server
}

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

