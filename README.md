# title-from-zap-obs-action

This action returns the title from [zap](https://github.com/zaproxy/action-baseline) and observatory actions results.

## Inputs

## `zap`

**Optional** Path to Zap Json report. Default to `report_json.json`
## `observatory`

**Optional** Path to Observatory md report. Default to `Observatory_report.md`
## `DB_HOST`
## `DB_USER`
## `DB_PWD`
## `DB_NAME`

## Outputs

## `title`
## `summary`

The email content
## Example usage
```
uses: actions/iib0011/title-from-zap-obs-action
with:
  zap: path/to/zap
  observatory: path/to/observatory
  DB_HOST: db_host
  DB_USER: db_user
  DB_PWD: db_pwd
  DB_NAME: db_name
