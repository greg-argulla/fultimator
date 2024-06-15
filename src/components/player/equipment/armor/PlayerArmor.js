import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTranslate } from "../../../../translation/translate";
import PrettyArmor from "./PrettyArmor";
import { Edit, Error } from "@mui/icons-material";

export default function PlayerArmor({
  player,
  armor,
  onEditArmor,
  onEquipArmor,
}) {
  const { t } = useTranslate();
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const [expanded, setExpanded] = useState(false);

  const checkIfEquippable = (armorItem) => {
    // if armor is not martial then is always equippable
    // true = equippable, false = not equippable

    const { classes } = player;

    // If the armor is not martial, it is always equippable
    if (!armorItem.martial) {
      return true;
    }

    // Iterate through each class to check if the armor is equippable based on their benefits
    for (const playerClass of classes) {
      const { benefits } = playerClass;

      // Check if the class benefits allow equipping martial armor
      if (benefits.martials) {
        if (armorItem.martial && benefits.martials.armor) {
          // The armor is equippable based on the current class
          return true;
        }
      }
    }

    // The armor is not equippable based on any of the player's classes
    return false;
  };

  const countEquippedArmor = () => {
    let count = 0;
    armor.forEach((armor) => {
      if (armor.isEquipped) {
        count++;
      }
    });
    return count;
  };

  const canEquipArmor = () => {
    if (countEquippedArmor() === 0) {
      return true;
    }
    return false;
  };

  const handleEquipArmor = (index, checked) => {
    const armorSelected = armor[index];
    if (canEquipArmor(armorSelected) || !checked) {
      const updatedArmor = { ...armor };
      updatedArmor[index].isEquipped = checked;
      onEquipArmor(updatedArmor);
    }
  };

  useEffect(() => {
    // Open the Accordion when a new weapon is added
    if (armor.length > 0) {
      setExpanded(true);
    }
  }, [armor]);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      elevation={3}
      sx={{
        p: "15px",
        borderRadius: "8px",
        border: "2px solid",
        borderColor: secondary,
        marginBottom: 3,
      }}
      expanded={expanded}
      onChange={handleAccordionChange}
    >
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography
          variant="h2"
          component="legend"
          sx={{
            color: primary,
            textTransform: "uppercase",
            padding: "5px 10px",
            borderRadius: 0,
            margin: "0 0 0 0",
            fontSize: "1.5em",
          }}
        >
          {t("Armor")}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justifyContent="flex-end" spacing={2}>
          {/* map the weapons and display them with a PrettyWeapon component if they exist */}
          {armor.map((armorItem, index) => (
            <React.Fragment key={index}>
              <Grid item container xs={12} alignItems="center">
                {/* Updated grid item */}
                <Grid item xs={1}>
                  {checkIfEquippable(armorItem) ? (
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={armorItem.isEquipped}
                            onChange={(e) =>
                              handleEquipArmor(index, e.target.checked)
                            }
                          />
                        }
                        label={<Typography align="center">{t("Equip Armor")}</Typography>}
                        labelPlacement="bottom"
                      />
                    </FormGroup>
                  ) : (
                    <Tooltip title={t("Not Equippable")}>
                      <IconButton>
                        <Error color="error" />
                      </IconButton>
                    </Tooltip>
                  )}
                </Grid>
                <Grid item xs={10}>
                  <PrettyArmor armor={armorItem} />
                </Grid>
                <Grid
                  item
                  container
                  xs={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* Updated grid item */}
                  <Grid item xs={12}>
                    <IconButton onClick={() => onEditArmor(index)}>
                      <Edit />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12}>
                    {armorItem.equipped && (
                      <Typography
                        variant="h5"
                        sx={{ transform: "rotate(90deg)", marginRight: "20px" }}
                      >
                        {t("Equipped")}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}