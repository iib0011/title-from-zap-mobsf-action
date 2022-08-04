# title-from-zap-obs-action

This action returns the title from [zap](https://github.com/zaproxy/action-baseline) and observatory actions results.

## Inputs

## `zap`

**Optional** Path to Zap Json report. Default to `report_json.json`
## `observatory`

**Optional** Path to Observatory md report. Default to `Observatory_report.md`

## Outputs

## `title`
## `summary`

The excel report
## Example usage
```
uses: actions/iib0011/title-from-zap-obs-action
with:
  zap: path/to/zap
  observatory: path/to/observatory
