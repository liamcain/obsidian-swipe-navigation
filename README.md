# Monthly Notes

The Monthly Notes plugin mirrors the functionality of the Daily Notes plugin with one noteable difference: it's monthly!

## Features

### Commands

#### Open Monthly Note

Opens the monthly note for the current week. If one doesn't exist, it will create one automatically for you.

#### Next Monthly Note

Navigates to the next monthly note chronologically. Skips over weeks with no monthly note file.

> **Note:** This command is only available if the active focused note is a monthly note.

#### Previous Monthly Note

Navigates to the previous monthly note chronologically. Skips over weeks with no monthly note file.

> **Note:** This command is only available if the active focused note is a monthly note.

### Calendar Plugin Integration

Coming soon! I just have to figure out a good place to show it in the UI.

## Settings

| Setting  | Description                                                                                                                                                                                        |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Folder   | The folder that your monthly notes go into. It can be the same or different from your daily notes. By default they are placed in your vault root.                                                  |
| Template | Configure a template for monthly notes. Monthly notes have slightly different template tags than daily notes. See here for the list of supported [monthly note template tags](#template-tags).     |
| Format   | The date format for the monthly note filename. Defaults to `YYYY-MM`. If you use `DD` in the week format, this will refer to first day of the week (Sunday or Monday, depending on your settings). |

### Template Tags

| Tag            | Description                                                                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`        | Works the same as the daily note `{{title}}`. It will insert the title of the note                                                                                                     |
| `date`, `time` | Works the same as the daily note `{{date}}` and `{{time}}`. It will insert the date and time of the first day of the week. Useful for creating a heading (e.g. `# {{date:MMM YYYY}}`). |

---

## Say Thanks 🙏

If you like this plugin and would like to buy me a coffee, you can!

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/liamcain)

Like my work and want to see more like it? You can sponsor me.

[![GitHub Sponsors](https://img.shields.io/github/sponsors/liamcain?style=social)](https://github.com/sponsors/liamcain)
